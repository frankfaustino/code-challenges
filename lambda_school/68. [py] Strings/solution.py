# Source : [Py] Strings
# Author : Frank Faustino
# Date   : 2018-08-08
# Lang   : Python

def donuts(count):
  return f'Number of donuts: {count if count < 10 else "many"}'

print(donuts(5))
print(donuts(23))

def both_ends(s):
  return s[:2] + s[-2:] if len(s) > 2 else ''

print(both_ends('spring'))
print(both_ends('hi'))

def fix_start(s):
  return s[0] + s[1:].replace(s[0], '*')

print(fix_start('babble'))
print(fix_start('lollapalooza'))

def mix_up(a, b):
  return f'{b[:2]}{a[2:]} {a[:2]}{b[2:]}'

print(mix_up('dog', 'dinner'))