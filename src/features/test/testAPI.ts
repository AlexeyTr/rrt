export function fetchRows({
                              engine = 'stock',
                              market = 'shares',
                              board = 'tqbr',
                              securities = ['GAZP', 'SBER', 'LKOH']
                          }) {
    const items = securities.join(",");

    return fetch(
        `https://iss.moex.com/iss/engines/${engine}/markets/${market}/boards/${board}/securities.json?securities=${items}`,
        //'http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr/securities/SBER.json?from=2022-08-31',
        {method: 'get'}
    )
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => {
            alert(err)
        })
}
