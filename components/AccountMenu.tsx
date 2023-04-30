import { signOut } from "next-auth/react"
import React from 'react'

interface AccountMenuProps {
    visible: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    if(!visible) return null
    return (
        <div 
            className="
                bg-black 
                w-56 
                absolute 
                top-14 
                right-0 
                flex-col
                py-5 
                border-2
                border-gray-800 flex"
        >
            <div className="flex flex-col gap-3">
                <div
                    className="
                        px-3
                        group/item
                        flex 
                        flex-row 
                        gap-3 
                        items-center 
                        w-full
                        h-full
                    "
                >
                    <img 
                        className="w-8 rounded-md"
                        src="/images/default-blue.png"
                        alt="profile"
                    />
                    <p className="text-white text-sm group-hover/item:underline">
                        UserName
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 my-4 h-px"/>
                <div 
                    className="px-3 text-center text-white text-sm hover:underline"
                    onClick={() => signOut()}
                >
                    Sign Out
                </div>
            </div>
        </div>
    )
}

export default AccountMenu