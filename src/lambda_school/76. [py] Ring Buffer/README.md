# Ring Buffer

Like arrays that you saw in C, a **ring buffer** is a _non-growable buffer with a fixed size_. In this case, however, that turns out to be a feature of the data structure.

When the ring buffer is full and a new element is inserted, the oldest element in the ring buffer is overwritten with the newest element. This kind of data structure is very useful for use cases such as storing logs and history information, where you typically want to store information up until it reaches a certain age, after which you don't care about it anymore and don't mind seeing it overwritten by newer data.

Implement this behavior in the `RingBuffer` class. `RingBuffer` has two methods, `append` and `get`. The `append` method adds elements to the buffer. The `get` method returns all of the elements in the buffer ordered from oldest to newest. In other words, least-recently added elements first, then most-recently added elements. New elements added to the buffer should directly replace the oldest elements in-place.

The class's constructor and the method signatures are correct, but the constructor has not been filled in for you. You'll need to implement it yourself.

Example:
```py
buffer = RingBuffer(3)

buffer.append('a')
buffer.append('b')
buffer.append('c')

buffer.get()        # should return ['a', 'b', 'c']

buffer.append('d')  # directly replaces 'a' 

buffer.get()        # should return ['d', 'b', 'c']

buffer.append('e')  # directly replaces 'b'
buffer.append('f')  # directly replaces 'c'

buffer.get()        # should return ['d', 'e', 'f']
```