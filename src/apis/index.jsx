import './ajax'
import { BASE_URL } from "../utils/constant";
import ajax from './ajax';

/**
 * User
 * @param User对象
 */

export const registerUser = (user) => ajax(BASE_URL + '/user/register', user, 'POST')

export const loginUser = (user) => ajax(BASE_URL + '/user/login', user, 'POST')