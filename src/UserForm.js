import {useState} from "react";

export default function UserForm({onUserAdd}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(name,email)
        onUserAdd({name, email});

        setEmail('');
        setName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block">
                <span className="block mt-2 mb-2 text-sm w-20 bg-blue-500 hover:bg-blue-600 text-white font-medium text-slate-700">Name</span>
                <input id='name'
                       value={name}
                       onChange={e => setName(e.target.value)}
                       className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
            <label htmlFor="email" className="block">
                <span className="block mt-2 mb-2 text-sm w-20 bg-blue-500 hover:bg-blue-600 text-white font-medium text-slate-700">Email</span>

                <input id="email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                       className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 mb-4 rounded">
                Add User
            </button>
        </form>
    )
}
