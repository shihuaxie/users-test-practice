export default function UserList({users}) {
    const renderedUsers = users.map((user) => {
        return (
            <tr key={user.name}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
            </tr>
        )
    });
    return (
        <table className="border-collapse">
            <thead>
            <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
            </tr>
            </thead>
            <tbody>{renderedUsers}</tbody>
        </table>
    );


}