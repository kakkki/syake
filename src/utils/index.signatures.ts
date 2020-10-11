// @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export#Description
export const load = () => '名前付きエクスポート'
export const load2 = () => '名前付きエクスポート2'

// @see https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures
// インデックスシグネチャ = 添え字アクセサに対する型情報を定義する [index:string]
//   [index:string]
export default () => {

    // @see https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures#indekkusushigunechawosuru
    // fooオブジェクトに格納される構造体
    // 構造体を格納するアクセサの型はインデックスシグネチャで定義してる [index:string]
    // {
    //     message1: string,
    //     message2: string,
    //     0: string
    // }
    const foo:{ [index:string] : {
            message1: string,
            message2: string,
            0: number
        },} = {};

    foo['a'] = {
        message1: 'message1',
        message2: 'message2',
        0 : 10000
    };

    // アクセサがstringの場合はドット記法でアクセス可能
    console.log(`message1 : ${foo['a'].message1}`);
    console.log(`message2 : ${foo['a']['message2']}`);
    console.log(`0 : ${foo['a'][0]}`);


    // @see https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures#stringtonumberindekusanowotsu
    // stringとnumberインデクサの両方を持つ
    interface StringOrNumber {
        [key: string]: string | number; // Must accommodate all members
    }
    const stringOrNumber: StringOrNumber = {}
    stringOrNumber['a'] = "aaaa"
    stringOrNumber['b'] = 100
    console.log(`stringOrNumber['a'] : ${stringOrNumber['a']}`);
    console.log(`stringOrNumber['b'] : ${stringOrNumber['b']}`);

    // @see https://typescript-jp.gitbook.io/deep-dive/type-system/index-signatures#dezainpatnnesutosaretaindekkusushigunecha
    // インデックスシグネチャで指定された構造体を再帰的にネストして使用してみた例
    interface NestedCSS {
        color?: string;
        nest?: {
          [selector: string]: NestedCSS;
        }
      }
      const example: NestedCSS = {
        color: 'red',
        nest: {
          '.subclass': {
            color: 'blue',
            nest: {
                '.subclass2': {
                    color: 'blue'
                }
            }
          }
        }
      }

      const failsSilently: NestedCSS = {
        color: 'red', // TS Error: unknown property `colour`
      }

      const failsSilently2: NestedCSS = {
        nest: {
            '.subclass': {
              color: 'blue'
            }
          }
      }

}