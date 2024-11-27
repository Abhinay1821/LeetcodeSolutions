function isAnagram(s: string, t: string): boolean {
    const news = s.split('').sort().join('')
    const newt = t.split('').sort().join('')
    console.log(news,newt)
    return news===newt
};