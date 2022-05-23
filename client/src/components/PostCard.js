import toast from 'react-hot-toast'

export const PostCard = ({  post  }) => {

    const handleDelete = () => {
        toast((t) => (
            <div>
                <p>Do you want to delete</p>
                <div>
                    <button>Delete</button>
                    <button className='bg-slate-400 hover:bg-slate-500 px-3 pxy-2 text-white rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>Cancel</button>
                </div>
            </div>
        ))
    }

  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black
    hover:bg-zinc-700 hover:cursor-pointer" >
       <div className="px-4 py-7">
            <div className="flex justify-between">
                <h3>    
                    {post.title}
                </h3>
                <button onClick={handleDelete} className="bg-red-900 text-sm px-2 py-1 rounded-sm">
                    Delete
                </button>
            </div>
            <p>{post.description}</p>
       </div>
    </div>
  )
}
