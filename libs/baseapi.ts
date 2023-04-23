import useSWR from 'swr'
import { postFetcher } from './fetcher'
const baseAPIURL = process.env.NEXT_PUBLIC_BASE_API_URL

const generateUrl = (url) => `${baseAPIURL}${url}`

export function makeBaseOID(serverOID: string, type: number) {
    const { data, error } = useSWR([generateUrl("/oid/make"), {serverOID: serverOID, type: type}], postFetcher)
    if (error) return false;
    return data;
}