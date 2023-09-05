let Header = (props) => {
    // console.log("Header",props.data)
    return (
        <>
        <div className="add-to-cart ">
            <span className="cart-count">{props.data.length}</span>
            <img src="https://cdn.pixabay.com/photo/2018/03/14/12/53/shopping-3225130_1280.png" alt="" width={50} />
        </div>
           
        </>
    )
}
export default Header;