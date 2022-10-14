const SectionWrapper = ({tagline, title, children}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className='tagline color-blue'>{tagline}</div>
                    <h3 className="volkhov">{title}</h3>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default SectionWrapper