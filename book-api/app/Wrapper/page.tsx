import { FC } from 'react'

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='mx-14'>
            {children}
        </div>
    )
}
export default Wrapper