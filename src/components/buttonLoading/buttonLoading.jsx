const ButtonLoading = () => {
    return (
        <button className="btn" type="button" disabled>
             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    )
}

export default ButtonLoading;