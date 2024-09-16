import './index.css'
function Paragraph({title, content, type = "paragraph", children}) {
    return ( 
        <div className = {type}>
            <div className = "paragraph-title">
                {title}
            </div>
            <div className = "paragraph-content">
                {content}
                {children}
            </div>
        </div>
     );
}

export default Paragraph;