import './block.scss';
const Block = ({children, small}) => {
    const cls = ['block'];
    if(small) cls.push('block--small')
    return (
        <div className={cls.join(' ')}>
            {children}
        </div>
    )
}

export default Block;
