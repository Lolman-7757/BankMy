import React from 'react'

function Formatter(n,c) {
    const arr = x => Array.from(x);
    const num = x => Number(x) || 0;
    const str = x => String(x);
    const isEmpty = xs => xs.length === 0;
    const take = n => xs => xs.slice(0, n);
    const drop = n => xs => xs.slice(n);
    const reverse = xs => xs.slice(0).reverse();
    const comp = f => g => x => f(g(x));
    const not = x => !x;
    const chunk = n => xs => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
    
    function numberToWords(n, c) {
    
        let a = [
            '', 'bir', 'ikki', 'uch', 'to`rt',
            'besh', 'olti', 'yetti', 'sakkiz', 'to`qqiz',
            'o`n', 'o`n bir', 'o`n ikki', 'o`n uch', 'o`n to`rt',
            'o`n besh', 'o`n olti', 'o`n yetti', 'o`n sakkiz', 'o`n to`qqiz'
        ];
        let b = [
            '', '', 'yigirma', 'o`ttiz', 'qiriq',
            'ellik', 'oltmish', 'yetmish', 'sakson', 'to`qson'
        ];
    
        let g = [
            '', 'ming', 'million', 'milliard', 'trillion', 'kvadrilion',
            'kvitillion', 'sekstillion', 'septillion', 'oktillion', 'nontillion'
        ];
    
        let makeGroup = ([ones, tens, huns]) => {
            return [
                num(huns) === 0 ? '' : a[huns] + ' yuz ',
                num(ones) === 0 ? b[tens] : b[tens] && b[tens] + ' ' || '',
                a[tens + ones] || a[ones]
            ].join('');
        };
    
        let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
        if (typeof n === 'number') return numberToWords(String(n));
    
        if (n === '0') return 'nol';
    
        return comp(chunk(3))(reverse)(arr(n))
            .map(makeGroup)
            .map(thousand)
            .filter(comp(not)(isEmpty))
            .reverse()
            .join(' ');
    }
}

export default Formatter