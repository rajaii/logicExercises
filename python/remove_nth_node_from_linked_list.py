#from leetcode medium difficulty https://leetcode.com/problems/remove-nth-node-from-end-of-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        
        comp_arr = []
        current = head
        
        while current is not None:
            
            comp_arr.append(current.val)
            current = current.next
          
        current = head
        prev = None
        incrementor = 0
        while current is not None:
            if head.next is None and n == 1:
                head = None
                return head
            
            elif head.next is None and n == 0:
                return head
            
            elif n == len(comp_arr):
                head = head.next
                del current
                return head
            else:  
                
                prev = current
                current = current.next
                incrementor += 1

                if current.val == comp_arr[len(comp_arr)-n] and incrementor == len(comp_arr) - n:
                    print(f'in: {comp_arr}')
                    print(f'prev: {prev} current: {current}')
                    prev.next = current.next
                    # current.next = None???
                    del current
                    return head
                
                
            
                
            