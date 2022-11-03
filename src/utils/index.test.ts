import { getCookie, setCookie } from '.'
import { describe, expect, test } from 'vitest'

describe('Get empty cookies, then set, then get again!', () => {
  test('read cookie of user, should be empty', () => {
    expect(getCookie('user')).toBe('')
  })
  test('Case 1: read cookie of the user field again (empty field)', () => {
    setCookie('user', 'test')
    expect(getCookie('user')).toBe('test')
  }) /*
    test("Case 2: read cookie of the user field again (field set)", ()=>{
        
        cookies_properties.set('user', 'test');
        expect(cookies_properties.get('user')).toBe('test')
    })*/
})
