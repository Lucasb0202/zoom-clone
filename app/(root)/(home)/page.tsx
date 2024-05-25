import React from 'react'

const Home = () => {
  const months: Record<number, string> = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }

  const days: Record<number, string> = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  }

  // const date = (new Intl.DateTimeFormat('en-US', {
  //   dateStyle: 'full'
  // })).format(now)

  const now = new Date()
  const h = now.getHours()
  var time = ''
  
  if (h > 12) {
    time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) + ' PM'
    
  } else {
    time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) + ' AM'
  }

  const getMonthName = () => {
    return months[now.getMonth()] + ' ' + now.getDate()
  }

  const getDayName = () => {
    return days[now.getDay()]
  }

  const date = getDayName() + ', ' + getMonthName() + ', ' + now.getFullYear()

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='p-6 flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home