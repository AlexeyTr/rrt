export function fetchRows() {
    return fetch(
        'https://gp-test.nso.ru/application/bi_data/get',
        {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Basic bG9naW46c2VydmljZQ=='
            },
            body: JSON.stringify({
                id: 'exportPurchase',
                attribute: [
                    {id: 'fundsType'},
                    {id: 'csr'},
                ],
                filterParam: [
                    {id: "ContextYear", operation: "equal", value: "2022"},
                    {id: "inn", operation: "equal", value: "5406643611"},
                    {id: "kpp", operation: "equal", value: "540601001"}
                ]
            })
        }
    )
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => {
            alert(err)
        })
}