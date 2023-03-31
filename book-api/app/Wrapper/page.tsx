import { FC } from 'react'

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='mx-5'>
            {children}
        </div>
    )
}
export default Wrapper