# Source : https://www.codewars.com/kata/5ab52526379d20736b00000e
# Author : Frank Faustino
# Date   : 2022-01-19

from typing import Tuple
from math import ceil
from os.path import abspath, dirname, join

def mag_number(info: Tuple[str, int]) -> int:
    """
    Returns the number of magazines a soldier needs given a
    tuple containing the name of a soldier's weapon and
    the number of streets the soldier has to patrol.

    >>> mag_number(("PT92", 6))
    2
    >>> mag_number(("M4A1", 6))
    1
    """
    magazine_sizes = {
        'PT92': 17,
        'M4A1': 30,
        'M16A2': 30,
        'PSG1': 5
    }
    gun = info[0]
    streets = info[1]
    bullets = streets * 3

    return ceil(bullets / magazine_sizes[gun])
