import './ajax'
import { BASE_URL } from "../utils/constant";
import ajax from './ajax';

/**
 * User
 * @param User对象
 */

export const register = (user) => ajax(BASE_URL + '/register', user, 'POST')

export const login = (user) => ajax(BASE_URL + '/login', user, 'POST')