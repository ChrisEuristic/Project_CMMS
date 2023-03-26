const RouterMain = () => {
    return (
        <>
            <RouterNv />
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/member" element={} />
            </Routes>
        </>
    );
}

export default RouterMain;