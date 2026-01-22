'use server'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import z from "zod"

const MessageSchema = z.object({
    message: z.string(

    ).min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),

})

const ResponseSchema = z.object({
    question: z.string(),
    response: z.string(),
    model: z.string(),
})


export async function askGPT(previousState: any, formData: FormData) {
    const validatedData = MessageSchema.safeParse({
        message: formData.get("message")
    })

    if (!validatedData.success) {
        return {
            success: false,
            error: validatedData.error.issues[0].message
        }
    }
    const { message } = validatedData.data
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })
    try {
        const response = await openai.responses.parse({
            model: "gpt-5.2",
            input: [
                {
                    role: "system",
                    content: "You are an expert in Arkham Horror the Living Card Game. Answer questions using the provided context whenever possible. If the answer is not in the contexts then use the web_search tool to find an answer. If you cannot find an answer then say so. Do not make up answers. Always cite your sources in the answer"
                },
                {
                    role: "user",
                    content: message
                }
            ],
            tools: [
                {
                    type: "file_search",
                    vector_store_ids: ["vs_6936fc4411dc8191b72b52e971e17546"]
                },
                {
                    type: "web_search",
                    filters: {
                        allowed_domains: ["arkhamdb.com", "fantasyflightgames.com", "reddit.com"]
                    }
                }
            ],
            text: {
                format: zodTextFormat(ResponseSchema, "response")
            }
        })
        console.log(response.output_parsed)
        const parsedResponse = response.output_parsed
        if (!parsedResponse) {
            return {
                success: false,
                error: "Failed to get response from AI"
            }
        }
        const model = response.model
        await saveGPTtoDB({
            question: message,
            response: parsedResponse.response,
            model: model
        })
        revalidatePath('/')
        return {
            success: true,
            response: parsedResponse.response,
            model: model
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: "Failed to get response from AI"
        }
    }


}

export async function saveGPTtoDB(data: {
    question: string,
    response: string,
    model: string,

}) {
    return await prisma.arkhamChat.create({
        data: {
            question: data.question,
            answer: data.response,
            model: data.model,
        }
    })
}

export async function getChatHistory() {
    return await prisma.arkhamChat.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
}
