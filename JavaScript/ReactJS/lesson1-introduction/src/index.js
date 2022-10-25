const list = (
    <ul>
            <li style={{"color":"red"}}>laptop</li>
            <li>table</li>
            <li>book</li>
    </ul>
)

const temp = (
    <div>
        {list}
        {list}
        {list}
        {list}
        {list}
    </div>
)


ReactDOM.render(temp,document.querySelector('#root'));