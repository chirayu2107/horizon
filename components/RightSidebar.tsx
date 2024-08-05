import React from 'react'

const RightSidebar = ({user, transactions, banks}: 
    RightSidebarProps
) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex-col pb-8'>
            <div className='profile-banner' />

            <div className='profile'>
                <div className='profile-img'>
                    <span className = "text-5xl font-bold text-blue-500">{user.firstName[0]}</span>

                </div>
                <div className='profile-details'>
                    <h1 className='profilr-name'>
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className = "profile-email">
                        {user.email}
                    </p>
                </div>
            </div>
        </section>
        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2>
                    
                </h2>
            </div>

        </section>
    </aside>
  )
}

export default RightSidebar