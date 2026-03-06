import ImageShelf from "../actions/image-shelf"
import ImageUploader from "../actions/image-uploader"
import { getUsers } from "../actions/user"


export default async function AccountPage() {
    const users = await getUsers()
    console.log(users)
    const images = users?.map((user) => user.userImages).flat() || []
    return (
        <div
            className="p-2 mt-20"
        >
            <h1>Account</h1>
            <ImageShelf
                images={images}
            />
            <ImageUploader />
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}

                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}