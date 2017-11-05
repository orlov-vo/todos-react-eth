import React from 'react'

export function Home() {
  return (
    <main className="container">
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>Welcome!</h1>

          <p>
            This project is built on new technologies for decentralized applications.
            </p>

          <p>
            You need to use <a href="https://github.com/ethereum/mist">Mist</a>
            , <a href="https://metamask.io/">MetaMask</a> or local node (via
              geth or parity) on the 9545 port for stable application operation.
            </p>

          <h2>Smart Contract Authentication</h2>

          <p>
            This project use autentication via a smart contract built-in.
            </p>
          <p>
            In the upper-right corner, you'll see a login button. Click it to login with with the Authentication smart contract. If there is no user information for the given address, you'll be redirected to sign up.
            </p>
        </div>
      </div>
    </main>
  )
}

export default Home
