!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirefd50;e.register("diaZn",(function(n,r){var t,o,i,a;t=n.exports,o="WalletLinkConnector",i=function(){return s},Object.defineProperty(t,o,{get:i,set:a,enumerable:!0,configurable:!0});var c=e("j1d3F");function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},u.apply(this,arguments)}function d(e,n){return d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},d(e,n)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(n){var r,t,o=function(e){var r,t=e.url,o=e.appName,i=e.appLogoUrl,a=e.darkMode,c=e.supportedChainIds;return(r=n.call(this,{supportedChainIds:c})||this).url=t,r.appName=o,r.appLogoUrl=i,r.darkMode=a||!1,r.handleChainChanged=r.handleChainChanged.bind(h(r)),r.handleAccountsChanged=r.handleAccountsChanged.bind(h(r)),r};t=n,(r=o).prototype=Object.create(t.prototype),r.prototype.constructor=r,d(r,t);var i=o.prototype;return i.activate=function(){try{var n=this,r=function(){return Promise.resolve(n.provider.request({method:"eth_requestAccounts"})).then((function(e){var r=e[0];return n.provider.on("chainChanged",n.handleChainChanged),n.provider.on("accountsChanged",n.handleAccountsChanged),{provider:n.provider,account:r}}))},t=function(){if(window.ethereum&&!0===window.ethereum.isCoinbaseWallet)n.provider=window.ethereum;else{var r=function(){if(!n.walletLink)return Promise.resolve(e("3R1na").then((function(e){var n;return null!=(n=null==e?void 0:e.default)?n:e}))).then((function(e){n.walletLink=new e(u({appName:n.appName,darkMode:n.darkMode},n.appLogoUrl?{appLogoUrl:n.appLogoUrl}:{})),n.provider=n.walletLink.makeWeb3Provider(n.url,1)}))}();if(r&&r.then)return r.then((function(){}))}}();return Promise.resolve(t&&t.then?t.then(r):r())}catch(e){return Promise.reject(e)}},i.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},i.getChainId=function(){try{return Promise.resolve(this.provider.chainId)}catch(e){return Promise.reject(e)}},i.getAccount=function(){try{return Promise.resolve(this.provider.request({method:"eth_requestAccounts"})).then((function(e){return e[0]}))}catch(e){return Promise.reject(e)}},i.deactivate=function(){this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged)},i.close=function(){try{return this.provider.close(),this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},i.handleChainChanged=function(e){this.emitUpdate({chainId:e})},i.handleAccountsChanged=function(e){this.emitUpdate({account:e[0]})},o}(c.AbstractConnector)})),e.register("3R1na",(function(n,r){n.exports=e("9FZDf")(e("17QCl").getBundleURL("3kfYm")+e("lGKbD").resolve("5RgLO")).then((function(){return e("XVuKO")}))}))}();
//# sourceMappingURL=walletlink-connector.esm.5696eee2.js.map
