function Helping() {
    return (
        <>
            <div>
                <button onClick={toggleScreenShare}>
                    {isScreenSharing ? 'Stop Sharing' : 'Start Sharing'}
                </button>
                <video ref={videoRef} autoPlay />
            </div>
        </>
    )
}

export default Helping