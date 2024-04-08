import Image from "next/image";
import { Gothic_A1 } from "next/font/google";
import Bullet from "@/components/bullet";
import ArrowRight from "@/components/arrow-right";
import SubBullet from "@/components/sub-bullet";

const gothicBold = Gothic_A1({
  weight: '600',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="flex align-center">
      <div className="m-auto max-w-screen-sm w-full">
        <div className="m-6">
          <div className={`${gothicBold.className} pt-6 text-3xl text-center`}>
            Matt Eddy
          </div>
        
          <img className="w-64 border-2 my-12 m-auto rounded-full" src="./me.png" />

          <div className={`${gothicBold.className} mt-6 text-2xl`}>
            Work Experience
          </div>

          <div className="text-xl mt-1 flex items-center">
            <div className="mr-auto text-lg">Solo Founder</div>
            <div className="ml-auto">Blueberry</div>
          </div>
          <div className="text flex items-center">
            Dec 2023 - Present
          </div>
          <div className="text-sm">
            <div className="flex items-center mt-2">
              <div className="p-2"><Bullet /></div>
              <div>Founded developer tools SaSS startup focused on interactive application customization - <a className="text-primary" href="https://www.getblueberry.io">getblueberry.io</a></div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Grew company from initial idea to profitability within six months.</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Defined company vision, handled all business development and sales, and created marketing strategy</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Owned all aspects of product development, architecture and technical implementation</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Designed highly-scalable and cost-efficient architecture, leveraging edge compute and edge caching to minimize latency and meet performance target</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Created refined, intuitive developer experience and lightweight, production-grade client libraries for simple application integration</div>
            </div>
          </div>

          <div className="text-xl mt-6 flex items-center">
            <div className="text-lg mr-auto">Software Engineer <ArrowRight /> Senior
            Staff Software Engineer</div>
            <div className="ml-auto">Outreach</div>
          </div>
          <div className="text flex items-center">
            February 2018 - Dec 2023
          </div>
          <div className="text-sm">
            <div className="flex items-center mt-2">
              <div className="p-2"><Bullet /></div>
              <div>Promoted three times during tenure</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Led team of 4 in complete overhaul of email syncing and storage:</div>
            </div>
            <div className="flex items-center">
              <div className="ml-6 p-2"><SubBullet /></div>
              <div>Architected constellation of Go services responsible for storage of 7 billion emails and 1.2 Petabytes of data</div>
            </div>
            <div className="flex items-center">
              <div className="ml-6 p-2"><SubBullet /></div>
              <div>Managed outside stakeholders, created timelines, and was the main point of contact for upper management</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Led team of 3 upgrading 550k line Rails codebase from Ruby 2.6.3 to Ruby 2.7.5 and then Ruby 3.1.3. Led the same team through upgrading Rails from 5.2.6 to 6.1.5</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Led a multiteam live migration off of chef based Kafka clusters to Amazon managed Kafka clusters</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Led a migration from chef based RabbitMQ cluster to kubernetes operated RabbitMQ cluster and modernized RabbitMQ usage</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Led MySQL optimization efforts, reducing writer usage by 31% and reducing server p90 latency across the board by 30ms by creating novel performance tooling.</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Automated hotfix process into a single Go CLI command, decreasing mean time to incident recovery</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Built, maintained, and deployed many features in Go, Ruby, and Javascript</div>
            </div>
          </div>
          <div className="text-xl mt-6 flex items-center">
            <div className="text-lg mr-auto">Software Engineer</div>
            <div className="ml-auto">Zesty</div>
          </div>
          <div className="text flex items-center">
            October 2015 - October 2017
          </div>
          <div className="text-sm">
            <div className="flex items-center mt-2">
              <div className="p-2"><Bullet /></div>
              <div>Built, maintained, and deployed features in Ruby and Javascript</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Rewrote business critical accounting and worker scheduling systems</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Designed and deployed containerized monitoring stack</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Migrated background processing to a more efficient debuggable platform</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Created internal code review and tech-support processes</div>
            </div>
          </div>

          <div className="text-xl mt-6 flex items-center">
            <div className="text-lg mr-auto">Software Engineer</div>
            <div className="ml-auto">Foraker Labs</div>
          </div>
          <div className="text flex items-center">
            April 2014 - June 2015
          </div>
          <div className="text-sm">
            <div className="flex items-center mt-2">
              <div className="p-2"><Bullet /></div>
              <div>Built, maintained, and deployed features in Ruby and Javascript</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Communicated directly with clients and demoed new features</div>
            </div>
            <div className="flex items-center">
              <div className="p-2"><Bullet /></div>
              <div>Gathered requirements and wrote/estimated user stories</div>
            </div>
            <div className="flex items-center mb-16">
              <div className="p-2"><Bullet /></div>
              <div>Helped write ETL tools to migrate legacy systems to new data models</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
