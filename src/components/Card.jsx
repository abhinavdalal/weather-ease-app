function Card({text}) {
    return (
       <div style={{
            width: '100px',
            height: '45px',
            backgroundColor: 'blue'
        }}>
            {text}
       </div> 
    );
}

export default Card;