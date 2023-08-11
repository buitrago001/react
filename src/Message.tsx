// PascalCasing - react standard, initial letter is a capital letter
function Message(){
    //JSX: Javascript XML
    const name = 'Andrew';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World </h1>
}

export default Message;