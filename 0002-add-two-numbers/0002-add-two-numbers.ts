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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head1 = l1;
    let head2 = l2;
    let node = new ListNode(0);
    let dummy = node;
    let carry = 0;
    while(l1!==null || l2!==null){
        let value;
        if(l1!==null && l2!==null){
            value = (l1.val + l2.val + carry);
            l1=l1.next;
            l2=l2.next;
        }
        else if(l1===null && l2!==null){
            value = ( l2.val + carry);
            l2=l2.next;
        }
        else{
            value = l1.val + carry;
            l1=l1.next;
        }
        node.next = new ListNode((value%10));
        carry = Math.floor(Math.floor(value / 10));
        node = node.next;
    }
    if(carry){
        node.next = new ListNode(1);
    }
    return dummy.next;
};