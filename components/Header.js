import Image from "next/image";
import logo from '../public/CorexStudios.png'
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image className="object-contain" alt='photo' src={logo} width={300} height={100} />
    </header>
  )
}

export default Header