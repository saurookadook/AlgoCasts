def merge(left, right)
  results = []

  while left.size && right.size do
    if left[0] < right[0]
      results.push(left.shift)
    else
      results.push(right.shift)
    end
  end

  [*results, *left, *right]
end

def mergeSort(arr)
  if arr.size == 1
    return arr
  end

  center = (arr.size / 2).floor
  left = arr.slice(0, center)
  right = arr.slice(center)

  merge(mergeSort(left), mergeSort(right))
end
