import { sum } from '../src/utils/sum';

class FirebaseEventTracker {
    eventParams<T extends { [x: string]: string | number } = {}>(params: T) {

        // オブジェクトから連想配列を生成
        const entries = Object.entries(params).map(([k, v]) => {
            if (typeof v === 'string' && v.length > 0) {
                return [k, v.substr(0, 10)];
            }
            return [k, v];
        });
        console.log(`entries[0][0] : ${entries[0][0]}`);
        console.log(`entries[0][1] : ${entries[0][1]}`);
        console.log(`entries[1][0] : ${entries[1][0]}`);
        console.log(`entries[1][1] : ${entries[1][1]}`);
        console.log(`entries[2][0] : ${entries[2][0]}`);
        console.log(`entries[2][1] : ${entries[2][1]}`);
        console.log(`values : ${entries}`)

        // 連想配列からオブジェクトを生成
        const fromEntries = Object.fromEntries(entries)
        console.log(`fromEntries.testkey : ${fromEntries.testkey}`);
        console.log(`fromEntries.testkey2 : ${fromEntries.testkey2}`);
        console.log(`fromEntries.testkey3 : ${fromEntries.testkey3}`);

        // entries連想配列の中の各配列は、keyとvalue用に要素は二つでないといけない
        if (Object.fromEntries) {
            return Object.fromEntries(entries);
        }

        console.log(`before reduce`)
        return entries.reduce<{
            [x: string]: string | number;
        }>((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {});
    }
}



describe('event params test', () => {
    it('normal test', () => {
        expect(sum(1, 2)).toBe(3);

        const fet = new FirebaseEventTracker();
        let result = fet.eventParams(
            {
                'testkey': "testValue",
                'testkey2': "testValue2",
                'testkey3': "qwertyuiopflkajlja"
            });

        console.log(`result : ${result}`)
        console.log(result)
    });
});

