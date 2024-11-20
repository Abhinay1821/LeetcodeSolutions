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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head===null || head.next===null) return null
    let sizeCount = 0;
    let temp = head;
    while(temp!==null){
        sizeCount++;
        temp=temp.next;
    }
    let n = Math.floor(sizeCount/2)
    let temp2 = head;
    while(n>1){
        temp2=temp2.next;
        n--;
    }
    temp2.next = temp2.next.next;
    return head;
};