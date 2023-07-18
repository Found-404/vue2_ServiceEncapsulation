/**
 * @constant API_ENV_MAP - API请求的环境变量映射
 */
export const API_ENV_MAP = {
    dev: 'http://gateway-dev.vevor.net',
    test: 'https://gateway.test.vevor.net',
    pre: 'https://gateway.preprod.vevor.net',
    prod: 'https://gateway.vevor.net',
};

console.log(process.env)

export const baseURL = API_ENV_MAP[process.env.NODE_ENV]