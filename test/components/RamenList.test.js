import { mount } from 'vue-test-utils'
import ramenList from '../../components/RamenList.vue'

// 直接test()を書くこともできるが、
// テストの大まかな単位でdescribeして囲っておくとよさげ
describe('ramenList', () => {
  let wrapper

  // beforeEachは各test毎の実行前に呼び出される
  beforeEach(() => {
    // mountすると、コンポーネントをテストで扱いやすくしたようなラッパーオブジェクトが作られる
    // プロパティやメソッドにアクセス可能になる
    // またDOMにも仮想DOMとしてアクセスできるようになる模様
    wrapper = mount(ramenList)
  })

  test('ラーメンリストの先頭がしょうゆ', () => {
    // wrapper.vm でコンポーネントのプロパティにアクセスできる
    expect(wrapper.vm.ramenList[0].name).toEqual('しょうゆ')
  })
})
