function pingPong() {
    return ping().then(() => {
        
        console.log('pong');
        setTimeout(pingPong, 10000);
    })
}