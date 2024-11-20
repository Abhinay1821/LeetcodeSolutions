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
    let dummy  = new ListNode(0);
    let tail = dummy;
    let carry = 0;
    while(l1!==null || l2!==null){
        let val,insert;
        if(l1 !==null && l2!==null){
            val = (l1.val + l2.val + carry);
            l1=l1.next;
            l2=l2.next;
        }
        else if(l1!==null && l2===null){
            val = (l1.val + carry);
            l1=l1.next;
        }
        else{
            val = l2.val + carry;
            l2=l2.next;
        }
        insert = val % 10;
        carry = Math.floor(val / 10);
        let temp = new ListNode(insert);
        tail.next = temp;
        tail = tail.next
    }
    if(carry){
        let temp = new ListNode(1);
        tail.next = temp;
    }
    let ans = dummy.next;
    // delete dummy;
    return ans;
};