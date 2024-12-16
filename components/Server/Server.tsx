

import Image from "next/image";
import server from "@/public/what is server.jpg"
import typeserver from "@/public/typeserver.webp"
import Daigram from "@/public/diagram.png"

export default function Server(){
    return(
        <div>
            
              
                <div className="w-[1000px] h-[70px] bg-slate-400 ml-[200px] mt-[20px]">
                <h1 className="text-center text-3xl pt-3 font-bold text-">Server Computer</h1>
            </div>
            <div className="w-[1000px] h-auto ml-[200px] ">
              <Image src={server} alt="What is server" className="w-[800px] mt-[40px] h-[300px] ml-[110px]"/>
              <h1 className="text-center text-extrabold text-4xl ">What is Server?</h1>
              {/* Server ka kam ya hota ha ka agr koi client  os sa request krta hai to wo osa response karta ha */}
              <p className="text-center text-[20px] ">A Server is a Computer that Provides Services to the computers and other devices connected to a Network..</p>
              <p className="text-center text-[20px] ">Server computer is more powerfull then other computers in the Network..</p>

              <Image src={typeserver} alt="TYPE SERVER" className="w-[800px] h-[300px] ml-[110px] mt-[60px]"/>
              
               {/* Type of server */}
               <h1 className="text-center font-bold text-4xl mt-[30px]">Type of Server</h1>
              <p className="text-center">1: File Server</p>
              <p className="text-center">2: Application Server</p>
              <p className="text-center">3: Mail Server</p>
              <p className="text-center">4: Web Server</p>
              <p className="text-center">5: Database Server</p>

              {/*Advantage  */}
              <h1 className="text-center font-bold text-4xl mt-[60px]">Advantage of Server</h1>
              <p className="text-center mt-[20px]">1: Backup</p>
              <p className="text-center">2: Security</p>
              <p className="text-center">3: Storage</p>

              {/* Disadvantage */}
              {/* Agr server system fail hojaye tu ya hamara pora network system Destroy hojta ha.. */}
              <h1 className="text-center font-bold text-4xl mt-[30px]">Disadvantage of Server</h1>
              <p className="text-center">1: Server</p>
              <p className="text-center">2: More Expensive</p>


              <Image src={Daigram} alt="Daigram" className="ml-[100px] mt-[70px] w-[800px] h-[300px]"/>
              <p className="text-center items-center mt-[20px] text-[20px] w-[700px] ml-[150px]">A server is a powerful computer or system that provides data, services, or resources to other computers, called clients, over a network. It is designed to handle multiple requests simultaneously and is often used to host websites, manage databases, store files, or run applications. Servers operate 24/7 to ensure consistent availability and reliability. Examples of servers include web servers, email servers, and file servers, which enable users to access specific resources or services remotely</p>
              {/* <button className="px-6 py-2 flex justify-center items-center text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300">
              <a href="./Client" className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300">
    About Client
  </a>

  </button> */}
              </div>
        </div>
        
    )
}