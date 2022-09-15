import { useEffect, useState} from 'react';

function useJsonFetch(url, opts) {
  const [state, setState] = useState({data: [], error: '', isLoading: false})

  useEffect(() => {
    fetch(url + opts)
    .then(res => res.json())
    .then(opts => console.log(opts))
  }, [opts, url])

  return state
}

export default useJsonFetch