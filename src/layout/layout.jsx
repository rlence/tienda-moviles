import Header from "./header/header";

function Layout(props){

    return(
        <div>
            <Header />
            <section>
                {props.children}
            </section>
        </div>
    )
}

export default Layout;