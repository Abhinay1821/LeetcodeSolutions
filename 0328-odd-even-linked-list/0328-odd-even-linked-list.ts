/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
    if(head===null || head.next===null || head.next.next===null) return head
    const oddStart = head
    const evenStart = head.next
    let odd = oddStart
    let even = evenStart
    while(odd.next!==null && even.next!=null){
        odd.next = even.next
        odd = even.next
        even.next = odd.next
        even = odd.next
    }
    odd.next = evenStart
    return oddStart

};