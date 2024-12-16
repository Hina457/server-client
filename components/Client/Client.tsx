



import Image from "next/image"
import client from "@/public/client1.jpg"
import serverclient from "@/public/serverclient.jpg"
import serverclient2 from "@/public/serverclient2.jpg"

export default function Client(){
    return(
        <div>
            <div className="w-[1000px] h-[70px] bg-slate-400 ml-[200px] mt-[20px]">
                <h1 className="text-center text-3xl pt-3 font-bold text-">Client Computer</h1>
            </div>
       <Image src={client} alt="client" className="w-[800px] h-[300px] ml-[270px] mt-[50px]"/>
       {/* Ya ziyadda tar user ka liya use hota ha */}
       {/* Client aik normal computer hota ha */}
       <h1 className="text-center text-extrabold text-4xl ">What is Client?</h1>
     <p className="w-[800px] ml-[270px] mt-[40px]">

A client computer is a device that accesses services, data, or applications provided by a server in a network. It can be a desktop, laptop, smartphone, or any other device connected to the network. The primary role of a client computer is to send requests to the server and display or process the responses received. For example, when you browse a website, your computer (the client) requests the web page from a web server and displays it on your screen. Client computers typically have limited processing power compared to servers, as they are designed for end-user tasks such as browsing, editing documents, or running applications. 
Examples of client computers include personal PCs, tablets, and mobile phones.
     </p>


       {/*Advantage of client  */}
       <h1 className="text-center font-bold text-4xl mt-[60px]">Advantage of Client</h1>
              <p className="text-center mt-[20px]">1: Ease of Use</p>
              <p className="text-center">2: Cost-Effective</p>
              <p className="text-center">3: Portability </p>
              <p className="text-center">4: Security and Control</p>
              <p className="text-center">5: Resource Access:</p>


            {/*Disadvantage of client  */}
       <h1 className="text-center font-bold text-4xl mt-[60px]">Disadvantage of Client</h1>
              <p className="text-center mt-[20px]">1: Limited Processing Power</p>
              <p className="text-center">2: Dependency on Servers</p>
              <p className="text-center">3: Data Security Risks </p>
              <p className="text-center">4: Storage Limitations</p>
              <p className="text-center">5: Network Dependency</p>


              <h1 className="text-center font-bold text-4xl mt-[60px]">Types of Client</h1>
              <p className="text-center mt-[20px]">1: Smart Clients</p>
              <p className="text-center">2: Web Client</p>
              <p className="text-center">3:Mobile Client</p>

              <div className="w-[1000px] h-[70px] bg-slate-400 ml-[200px] mt-[20px]">
              <h1 className="text-center font-serif text-bold text-4xl">server & Client </h1>
             </div>


             <Image src={serverclient} alt="pic" className="w-[800px] h-[300px] ml-[260px]"/>
             <Image src={serverclient2} alt="pic2"  className="w-[800px] h-[300px] ml-[260px] mt-[80px]"/>
             {/* <Image src={Back} alt="back" className="w-full h-[300px]"/> */}


        </div>
    )
}