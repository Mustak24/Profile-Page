export function Round_H(props){
    return(<>
        <div className={`${props.class} center absolute w-full h-full`} style={{
            rotate: `-${.5 * props.heading.length  * (props?.gap || 7)}deg`
        }}>
            {props.heading.split('').map((e, i)=>{
                return (
                    <span className="text-center w-full h-full absolute" style={{rotate: `${i*(props?.gap||7)}deg`}}>{e}</span>
                )
            })}
        </div>
    </>)
}