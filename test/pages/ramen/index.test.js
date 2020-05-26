import { mount, shallow } from 'vue-test-utils'
import index from '../../../pages/ramen/index.vue'

// 直接test()を書くこともできるが、
// テストの大まかな単位でdescribeして囲っておくとよさげ
describe('ramenList', () => {
  let wrapper

  // beforeEachは各test毎の実行前に呼び出される
  beforeEach(() => {
    // mountすると、コンポーネントをテストで扱いやすくしたようなラッパーオブジェクトが作られる
    // プロパティやメソッドにアクセス可能になる
    // またDOMにも仮想DOMとしてアクセスできるようになる模様
    wrapper = mount(index)

    // shallowの場合はサブコンポーネントがレンダリングされない
    // wrapper = shallow(index)
  })

  test('ラーメンリストの先頭がしょうゆ', () => {
    // wrapper.vm でコンポーネントのプロパティにアクセスできる
    expect(wrapper.vm.message).toEqual('ラーメンリスト')
  })
})
