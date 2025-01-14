<script>
	import { Mail, Phone, Clock } from 'lucide-svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Alert from '$lib/components/ui/alert';
	import * as Tabs from '$lib/components/ui/tabs';

	let animate = false;

	onMount(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 200);
		animate = true;
	});
</script>

<section
	class="mx-auto flex items-center justify-center bg-primary py-24 text-center text-background lg:py-36"
>
	<Tabs.Root value="terms-of-use" class="max-w-full">
		<div class="flex items-center justify-center px-4">
			<Tabs.List
				class="grid h-full grid-cols-2 gap-2 bg-[#345650] px-2 py-4 lg:flex lg:rounded-full lg:py-1.5"
			>
				<Tabs.Trigger
					class="rounded-full text-background data-[state=active]:bg-background data-[state=active]:font-semibold data-[state=active]:text-foreground"
					value="terms-of-use">Terms of use</Tabs.Trigger
				>
				<Tabs.Trigger
					class="rounded-full text-background data-[state=active]:bg-background data-[state=active]:font-semibold data-[state=active]:text-foreground"
					value="privacy-policy">Privacy policy</Tabs.Trigger
				>
				<Tabs.Trigger
					class="rounded-full text-background data-[state=active]:bg-background data-[state=active]:font-semibold data-[state=active]:text-foreground"
					value="shipping">Shipping</Tabs.Trigger
				>
				<Tabs.Trigger
					class="rounded-full text-background data-[state=active]:bg-background data-[state=active]:font-semibold data-[state=active]:text-foreground"
					value="returns">Returns & Refunds</Tabs.Trigger
				>
			</Tabs.List>
		</div>
		<Tabs.Content value="terms-of-use">
			<div class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4">
				<h1
					class="font-heading mx-auto mt-12 max-w-2xl scroll-m-20 text-center text-3xl font-bold tracking-tight text-background lg:mx-0 lg:text-5xl"
				>
					TERMS OF SERVICE
				</h1>
				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Overview
				</h2>
				<p class="mt-12 max-w-3xl">
					This website is operated by Tassie Tallow. Throughout the site, the terms “we”, “us” and
					“our” refer to Tassie Tallow. Tassie Tallow offers this website, including all
					information, tools and services available from this site to you, the user, conditioned
					upon your acceptance of all terms, conditions, policies and notices stated here.
				</p>
				<p class="mt-4 max-w-3xl">
					By visiting our site and/ or purchasing something from us, you engage in our “Service” and
					agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”),
					including those additional terms and conditions and policies referenced herein and/or
					available by hyperlink. These Terms of Service apply to all users of the site, including
					without limitation users who are browsers, vendors, customers, merchants, and/ or
					contributors of content.
				</p>
				<p class="mt-4 max-w-3xl">
					Please read these Terms of Service carefully before accessing or using our website. By
					accessing or using any part of the site, you agree to be bound by these Terms of Service.
					If you do not agree to all the terms and conditions of this agreement, then you may not
					access the website or use any services. If these Terms of Service are considered an offer,
					acceptance is expressly limited to these Terms of Service.
				</p>
				<p class="mt-4 max-w-3xl">
					Any new features or tools which are added to the current store shall also be subject to
					the Terms of Service. You can review the most current version of the Terms of Service at
					any time on this page. We reserve the right to update, change or replace any part of these
					Terms of Service by posting updates and/or changes to our website. It is your
					responsibility to check this page periodically for changes. Your continued use of or
					access to the website following the posting of any changes constitutes acceptance of those
					changes.
				</p>
				<p class="mt-4 max-w-3xl">
					Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform
					that allows us to sell our products and services to you.
				</p>
				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 1 - ONLINE STORE TERMS
				</h2>
				<p class="mt-6 max-w-3xl">
					By agreeing to these Terms of Service, you represent that you are at least the age of
					majority in your state or province of residence, or that you are the age of majority in
					your state or province of residence and you have given us your consent to allow any of
					your minor dependents to use this site.
				</p>
				<p class="mt-4 max-w-3xl">
					You may not use our products for any illegal or unauthorized purpose nor may you, in the
					use of the Service, violate any laws in your jurisdiction (including but not limited to
					copyright laws).
				</p>
				<p class="mt-4 max-w-3xl">
					You must not transmit any worms or viruses or any code of a destructive nature.
				</p>
				<p class="mt-4 max-w-3xl">
					A breach or violation of any of the Terms will result in an immediate termination of your
					Services.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 2 - GENERAL CONDITIONS
				</h2>
				<p class="mt-6 max-w-3xl">
					We reserve the right to refuse service to anyone for any reason at any time.
				</p>
				<p class="mt-4 max-w-3xl">
					You understand that your content (not including credit card information), may be
					transferred unencrypted and involve (a) transmissions over various networks; and (b)
					changes to conform and adapt to technical requirements of connecting networks or devices.
					Credit card information is always encrypted during transfer over networks.
				</p>
				<p class="mt-4 max-w-3xl">
					You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the
					Service, use of the Service, or access to the Service or any contact on the website
					through which the service is provided, without express written permission by us.
				</p>
				<p class="mt-4 max-w-3xl">
					The headings used in this agreement are included for convenience only and will not limit
					or otherwise affect these Terms.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
				</h2>
				<p class="mt-6 max-w-3xl">
					We are not responsible if information made available on this site is not accurate,
					complete or current. The material on this site is provided for general information only
					and should not be relied upon or used as the sole basis for making decisions without
					consulting primary, more accurate, more complete or more timely sources of information.
					Any reliance on the material on this site is at your own risk.
				</p>
				<p class="mt-4 max-w-3xl">
					This site may contain certain historical information. Historical information, necessarily,
					is not current and is provided for your reference only. We reserve the right to modify the
					contents of this site at any time, but we have no obligation to update any information on
					our site. You agree that it is your responsibility to monitor changes to our site.
				</p>
				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
				</h2>
				<p class="mt-6 max-w-3xl">Prices for our products are subject to change without notice.</p>
				<p class="mt-4 max-w-3xl">
					We reserve the right at any time to modify or discontinue the Service (or any part or
					content thereof) without notice at any time.
				</p>
				<p class="mt-4 max-w-3xl">
					We shall not be liable to you or to any third-party for any modification, price change,
					suspension or discontinuance of the Service.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 5 - PRODUCTS OR SERVICES
				</h2>
				<p class="mt-6 max-w-3xl">
					Certain products or services may be available exclusively online through the website.
					These products or services may have limited quantities and are subject to return or
					exchange only according to our Return Policy.
				</p>
				<p class="mt-4 max-w-3xl">
					We have made every effort to display as accurately as possible the colors and images of
					our products that appear at the store. We cannot guarantee that your computer monitor's
					display of any color will be accurate.
				</p>
				<p class="mt-4 max-w-3xl">
					We reserve the right, but are not obligated, to limit the sales of our products or
					Services to any person, geographic region or jurisdiction. We may exercise this right on a
					case-by-case basis. We reserve the right to limit the quantities of any products or
					services that we offer. All descriptions of products or product pricing are subject to
					change at anytime without notice, at the sole discretion of us. We reserve the right to
					discontinue any product at any time. Any offer for any product or service made on this
					site is void where prohibited.
				</p>
				<p class="mt-4 max-w-3xl">
					We do not warrant that the quality of any products, services, information, or other
					material purchased or obtained by you will meet your expectations, or that any errors in
					the Service will be corrected.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
				</h2>
				<p class="mt-6 max-w-3xl">
					We reserve the right to refuse any order you place with us. We may, in our sole
					discretion, limit or cancel quantities purchased per person, per household or per order.
					These restrictions may include orders placed by or under the same customer account, the
					same credit card, and/or orders that use the same billing and/or shipping address. In the
					event that we make a change to or cancel an order, we may attempt to notify you by
					contacting the e‑mail and/or billing address/phone number provided at the time the order
					was made. We reserve the right to limit or prohibit orders that, in our sole judgment,
					appear to be placed by dealers, resellers or distributors.
				</p>
				<p class="mt-4 max-w-3xl">
					You agree to provide current, complete and accurate purchase and account information for
					all purchases made at our store. You agree to promptly update your account and other
					information, including your email address and credit card numbers and expiration dates, so
					that we can complete your transactions and contact you as needed.
				</p>
				<p class="mt-4 max-w-3xl">For more detail, please review our Returns Policy.</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 7 - OPTIONAL TOOLS
				</h2>
				<p class="mt-6 max-w-3xl">
					We may provide you with access to third-party tools over which we neither monitor nor have
					any control nor input.
				</p>
				<p class="mt-4 max-w-3xl">
					You acknowledge and agree that we provide access to such tools "as is" and "as available"
					without any warranties, representations or conditions of any kind and without any
					endorsement. We shall have no liability whatsoever arising from or relating to your use of
					optional third-party tools.
				</p>
				<p class="mt-4 max-w-3xl">
					Any use by you of optional tools offered through the site is entirely at your own risk and
					discretion and you should ensure that you are familiar with and approve of the terms on
					which tools are provided by the relevant third-party provider(s).
				</p>
				<p class="mt-4 max-w-3xl">
					We may also, in the future, offer new services and/or features through the website
					(including, the release of new tools and resources). Such new features and/or services
					shall also be subject to these Terms of Service.
				</p>
				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 8 - THIRD-PARTY LINKS
				</h2>
				<p class="mt-6 max-w-3xl">
					Certain content, products and services available via our Service may include materials
					from third-parties.
				</p>
				<p class="mt-4 max-w-3xl">
					Third-party links on this site may direct you to third-party websites that are not
					affiliated with us. We are not responsible for examining or evaluating the content or
					accuracy and we do not warrant and will not have any liability or responsibility for any
					third-party materials or websites, or for any other materials, products, or services of
					third-parties.
				</p>
				<p class="mt-4 max-w-3xl">
					We are not liable for any harm or damages related to the purchase or use of goods,
					services, resources, content, or any other transactions made in connection with any
					third-party websites. Please review carefully the third-party's policies and practices and
					make sure you understand them before you engage in any transaction. Complaints, claims,
					concerns, or questions regarding third-party products should be directed to the
					third-party.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
				</h2>
				<p class="mt-6 max-w-3xl">
					If, at our request, you send certain specific submissions (for example contest entries) or
					without a request from us you send creative ideas, suggestions, proposals, plans, or other
					materials, whether online, by email, by postal mail, or otherwise (collectively,
					'comments'), you agree that we may, at any time, without restriction, edit, copy, publish,
					distribute, translate and otherwise use in any medium any comments that you forward to us.
					We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to
					pay compensation for any comments; or (3) to respond to any comments.
				</p>
				<p class="mt-4 max-w-3xl">
					We may, but have no obligation to, monitor, edit or remove content that we determine in
					our sole discretion are unlawful, offensive, threatening, libelous, defamatory,
					pornographic, obscene or otherwise objectionable or violates any party's intellectual
					property or these Terms of Service.
				</p>
				<p class="mt-4 max-w-3xl">
					You agree that your comments will not violate any right of any third-party, including
					copyright, trademark, privacy, personality or other personal or proprietary right. You
					further agree that your comments will not contain libelous or otherwise unlawful, abusive
					or obscene material, or contain any computer virus or other malware that could in any way
					affect the operation of the Service or any related website. You may not use a false e‑mail
					address, pretend to be someone other than yourself, or otherwise mislead us or
					third-parties as to the origin of any comments. You are solely responsible for any
					comments you make and their accuracy. We take no responsibility and assume no liability
					for any comments posted by you or any third-party.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 10 - PERSONAL INFORMATION
				</h2>
				<p class="mt-6 max-w-3xl">
					Your submission of personal information through the store is governed by our Privacy
					Policy. To view our Privacy Policy.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
				</h2>
				<p class="mt-6 max-w-3xl">
					Occasionally there may be information on our site or in the Service that contains
					typographical errors, inaccuracies or omissions that may relate to product descriptions,
					pricing, promotions, offers, product shipping charges, transit times and availability. We
					reserve the right to correct any errors, inaccuracies or omissions, and to change or
					update information or cancel orders if any information in the Service or on any related
					website is inaccurate at any time without prior notice (including after you have submitted
					your order).
				</p>
				<p class="mt-4 max-w-3xl">
					We undertake no obligation to update, amend or clarify information in the Service or on
					any related website, including without limitation, pricing information, except as required
					by law. No specified update or refresh date applied in the Service or on any related
					website, should be taken to indicate that all information in the Service or on any related
					website has been modified or updated.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 12 - PROHIBITED USES
				</h2>
				<p class="mt-6 max-w-3xl">
					In addition to other prohibitions as set forth in the Terms of Service, you are prohibited
					from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to
					perform or participate in any unlawful acts; (c) to violate any international, federal,
					provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or
					violate our intellectual property rights or the intellectual property rights of others;
					(e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or
					discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national
					origin, or disability; (f) to submit false or misleading information; (g) to upload or
					transmit viruses or any other type of malicious code that will or may be used in any way
					that will affect the functionality or operation of the Service or of any related website,
					other websites, or the Internet; (h) to collect or track the personal information of
					others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene
					or immoral purpose; or (k) to interfere with or circumvent the security features of the
					Service or any related website, other websites, or the Internet. We reserve the right to
					terminate your use of the Service or any related website for violating any of the
					prohibited uses.
				</p>
				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
				</h2>
				<p class="mt-6 max-w-3xl">
					We do not guarantee, represent or warrant that your use of our service will be
					uninterrupted, timely, secure or error-free.
				</p>
				<p class="mt-4 max-w-3xl">
					We do not warrant that the results that may be obtained from the use of the service will
					be accurate or reliable.
				</p>
				<p class="mt-4 max-w-3xl">
					You agree that from time to time we may remove the service for indefinite periods of time
					or cancel the service at any time, without notice to you.
				</p>
				<p class="mt-4 max-w-3xl">
					You expressly agree that your use of, or inability to use, the service is at your sole
					risk. The service and all products and services delivered to you through the service are
					(except as expressly stated by us) provided 'as is' and 'as available' for your use,
					without any representation, warranties or conditions of any kind, either express or
					implied, including all implied warranties or conditions of merchantability, merchantable
					quality, fitness for a particular purpose, durability, title, and non-infringement.
				</p>
				<p class="mt-4 max-w-3xl">
					In no case shall Tassie Tallow, our directors, officers, employees, affiliates, agents,
					contractors, interns, suppliers, service providers or licensors be liable for any injury,
					loss, claim, or any direct, indirect, incidental, punitive, special, or consequential
					damages of any kind, including, without limitation lost profits, lost revenue, lost
					savings, loss of data, replacement costs, or any similar damages, whether based in
					contract, tort (including negligence), strict liability or otherwise, arising from your
					use of any of the service or any products procured using the service, or for any other
					claim related in any way to your use of the service or any product, including, but not
					limited to, any errors or omissions in any content, or any loss or damage of any kind
					incurred as a result of the use of the service or any content (or product) posted,
					transmitted, or otherwise made available via the service, even if advised of their
					possibility. Because some states or jurisdictions do not allow the exclusion or the
					limitation of liability for consequential or incidental damages, in such states or
					jurisdictions, our liability shall be limited to the maximum extent permitted by law.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 14 - INDEMNIFICATION
				</h2>
				<p class="mt-6 max-w-3xl">
					You agree to indemnify, defend and hold harmless Tassie Tallow and our parent,
					subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors,
					service providers, subcontractors, suppliers, interns and employees, harmless from any
					claim or demand, including reasonable attorneys' fees, made by any third-party due to or
					arising out of your breach of these Terms of Service or the documents they incorporate by
					reference, or your violation of any law or the rights of a third-party.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 15 - SEVERABILITY
				</h2>
				<p class="mt-6 max-w-3xl">
					In the event that any provision of these Terms of Service is determined to be unlawful,
					void or unenforceable, such provision shall nonetheless be enforceable to the fullest
					extent permitted by applicable law, and the unenforceable portion shall be deemed to be
					severed from these Terms of Service, such determination shall not affect the validity and
					enforceability of any other remaining provisions.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 16 - TERMINATION
				</h2>
				<p class="mt-6 max-w-3xl">
					The obligations and liabilities of the parties incurred prior to the termination date
					shall survive the termination of this agreement for all purposes.
				</p>
				<p class="mt-4 max-w-3xl">
					These Terms of Service are effective unless and until terminated by either you or us. You
					may terminate these Terms of Service at any time by notifying us that you no longer wish
					to use our Services, or when you cease using our site.
				</p>
				<p class="mt-4 max-w-3xl">
					If in our sole judgment you fail, or we suspect that you have failed, to comply with any
					term or provision of these Terms of Service, we also may terminate this agreement at any
					time without notice and you will remain liable for all amounts due up to and including the
					date of termination; and/or accordingly may deny you access to our Services (or any part
					thereof).
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 17 - ENTIRE AGREEMENT
				</h2>
				<p class="mt-6 max-w-3xl">
					The failure of us to exercise or enforce any right or provision of these Terms of Service
					shall not constitute a waiver of such right or provision.
				</p>
				<p class="mt-4 max-w-3xl">
					These Terms of Service and any policies or operating rules posted by us on this site or in
					respect to The Service constitutes the entire agreement and understanding between you and
					us and govern your use of the Service, superseding any prior or contemporaneous
					agreements, communications and proposals, whether oral or written, between you and us
					(including, but not limited to, any prior versions of the Terms of Service).
				</p>
				<p class="mt-4 max-w-3xl">
					Any ambiguities in the interpretation of these Terms of Service shall not be construed
					against the drafting party.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 18 - GOVERNING LAW
				</h2>
				<p class="mt-6 max-w-3xl">
					These Terms of Service and any separate agreements whereby we provide you Services shall
					be governed by and construed in accordance with the laws of Australia.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 19 - CHANGES TO TERMS OF SERVICE
				</h2>
				<p class="mt-6 max-w-3xl">
					You can review the most current version of the Terms of Service at any time at this page.
				</p>
				<p class="mt-4 max-w-3xl">
					We reserve the right, at our sole discretion, to update, change or replace any part of
					these Terms of Service by posting updates and changes to our website. It is your
					responsibility to check our website periodically for changes. Your continued use of or
					access to our website or the Service following the posting of any changes to these Terms
					of Service constitutes acceptance of those changes.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					SECTION 20 - CONTACT INFORMATION
				</h2>
				<p class="mt-6 max-w-3xl">
					If you have a specific question that needs answering or you have an issue with your order,
					please contact Austin using the details below.
				</p>
				<p class="mt-4 max-w-3xl">Email: contact@tassietallow.com.au</p>
				<p class="mt-4 max-w-3xl">Phone: 0467 014 040</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="privacy-policy">
			<div class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4">
				<h1
					class="font-heading mx-auto mt-12 max-w-2xl scroll-m-20 text-center text-3xl font-bold tracking-tight text-background lg:mx-0 lg:text-5xl"
				>
					PRIVACY POLICY
				</h1>

				<p class="mt-12 max-w-3xl">
					This Privacy Policy describes how your personal information is collected, used, and shared
					when you visit or make a purchase from tassietallow.com.au (the "Site").
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Personal Information We Collect
				</h2>
				<p class="mt-6 max-w-3xl">
					When you visit the Site, we automatically collect certain information about your device,
					including information about your web browser, IP address, time zone, and some of the
					cookies that are installed on your device. Additionally, as you browse the Site, we
					collect information about the individual web pages or products that you view, what
					websites or search terms referred you to the Site, and information about how you interact
					with the Site. We refer to this automatically-collected information as "Device
					Information".
				</p>

				<p class="mt-4 max-w-3xl">
					We collect Device Information using the following technologies:
				</p>
				<ul class="mt-4 max-w-3xl list-disc pl-6">
					<li class="mt-2">
						"Cookies" are data files that are placed on your device or computer and often include an
						anonymous unique identifier. For more information about cookies, and how to disable
						cookies, visit http://www.allaboutcookies.org.
					</li>
					<li class="mt-2">
						"Log files" track actions occurring on the Site, and collect data including your IP
						address, browser type, Internet service provider, referring/exit pages, and date/time
						stamps.
					</li>
					<li class="mt-2">
						"Web beacons", "tags", and "pixels" are electronic files used to record information
						about how you browse the Site.
					</li>
				</ul>

				<p class="mt-6 max-w-3xl">
					Additionally when you make a purchase or attempt to make a purchase through the Site, we
					collect certain information from you, including your name, billing address, shipping
					address, payment information (including credit card numbers), email address, and phone
					number. We refer to this information as "Order Information".
				</p>

				<p class="mt-4 max-w-3xl">
					When we talk about "Personal Information" in this Privacy Policy, we are talking both
					about Device Information and Order Information.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					How Do We Use Your Personal Information?
				</h2>
				<p class="mt-6 max-w-3xl">
					We use the Order Information that we collect generally to fulfill any orders placed
					through the Site (including processing your payment information, arranging for shipping,
					and providing you with invoices and/or order confirmations). Additionally, we use this
					Order Information to:
				</p>
				<ul class="mt-4 max-w-3xl list-disc pl-6">
					<li class="mt-2">Communicate with you;</li>
					<li class="mt-2">Screen our orders for potential risk or fraud; and</li>
					<li class="mt-2">
						When in line with the preferences you have shared with us, provide you with information
						or advertising relating to our products or services.
					</li>
				</ul>

				<p class="mt-6 max-w-3xl">
					We use the Device Information that we collect to help us screen for potential risk and
					fraud (in particular, your IP address), and more generally to improve and optimize our
					Site (for example, by generating analytics about how our customers browse and interact
					with the Site, and to assess the success of our marketing and advertising campaigns).
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Sharing Your Personal Information
				</h2>
				<p class="mt-6 max-w-3xl">
					We share your Personal Information with third parties to help us use your Personal
					Information, as described above. For example, we use Shopify to power our online
					store--you can read more about how Shopify uses your Personal Information here: <a
						href="https://www.shopify.com/legal/privacy"
						class="text-[#F6A936] underline">https://www.shopify.com/legal/privacy</a
					>. We also use Google Analytics to help us understand how our customers use the Site --
					you can read more about how Google uses your Personal Information here:
					<a
						href="https://www.google.com/intl/en/policies/privacy/"
						class="text-[#F6A936] underline">https://www.google.com/intl/en/policies/privacy/</a
					>. You can also opt-out of Google Analytics here:
					<a href="https://tools.google.com/dlpage/gaoptout" class="text-[#F6A936] underline"
						>https://tools.google.com/dlpage/gaoptout</a
					>.
				</p>
				<p class="mt-4 max-w-3xl">
					Finally, we may also share your Personal Information to comply with applicable laws and
					regulations, to respond to a subpoena, search warrant or other lawful request for
					information we receive, or to otherwise protect our rights.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Behavioural Advertising
				</h2>
				<p class="mt-6 max-w-3xl">
					As described above, we use your Personal Information to provide you with targeted
					advertisements or marketing communications we believe may be of interest to you. For more
					information about how targeted advertising works, you can visit the Network Advertising
					Initiative's ("NAI") educational page at <a
						href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
						class="text-[#F6A936] underline"
						>http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a
					>.
				</p>

				<p class="mt-4 max-w-3xl">
					You can opt out of targeted advertising by using the links below:
				</p>
				<ul class="mt-4 max-w-3xl list-disc pl-6">
					<li class="mt-2">
						Facebook: <a
							href="https://www.facebook.com/settings/?tab=ads"
							class="text-[#F6A936] underline">https://www.facebook.com/settings/?tab=ads</a
						>
					</li>
					<li class="mt-2">
						Google: <a
							href="https://www.google.com/settings/ads/anonymous"
							class="text-[#F6A936] underline">https://www.google.com/settings/ads/anonymous</a
						>
					</li>
					<li class="mt-2">
						Bing: <a
							href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
							class="text-[#F6A936] underline"
							>https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a
						>
					</li>
				</ul>

				<p class="mt-6 max-w-3xl">
					Additionally, you can opt out of some of these services by visiting the Digital
					Advertising Alliance's opt-out portal at: <a
						href="http://optout.aboutads.info/"
						class="text-[#F6A936] underline">http://optout.aboutads.info/</a
					>.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Do Not Track
				</h2>
				<p class="mt-6 max-w-3xl">
					Please note that we do not alter our Site's data collection and use practices when we see
					a Do Not Track signal from your browser.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Your Rights
				</h2>
				<p class="mt-6 max-w-3xl">
					If you are a European resident, you have the right to access personal information we hold
					about you and to ask that your personal information be corrected, updated, or deleted. If
					you would like to exercise this right, please contact us through the contact information
					below.
				</p>
				<p class="mt-4 max-w-3xl">
					Additionally, if you are a European resident we note that we are processing your
					information in order to fulfill contracts we might have with you (for example if you make
					an order through the Site), or otherwise to pursue our legitimate business interests
					listed above. Additionally, please note that your information will be transferred outside
					of Europe, including to Canada and the United States.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Data Retention
				</h2>
				<p class="mt-6 max-w-3xl">
					When you place an order through the Site, we will maintain your Order Information for our
					records unless and until you ask us to delete this information.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Changes
				</h2>
				<p class="mt-6 max-w-3xl">
					We may update this privacy policy from time to time in order to reflect, for example,
					changes to our practices or for other operational, legal or regulatory reasons.
				</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="shipping">
			<div class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4">
				<h1
					class="font-heading mx-auto mt-12 max-w-2xl scroll-m-20 text-center text-3xl font-bold tracking-tight text-background lg:mx-0 lg:text-5xl"
				>
					SHIPPING POLICY
				</h1>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Shipping Terms and Conditions
				</h2>
				<p class="mt-6 max-w-3xl">
					Thank you for visiting and shopping at Tassie Tallow. The following information sets out
					the terms and conditions that constitute the Tassie Tallow Policy ('Policy').
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					1.0 Processing your Order
				</h2>
				<p class="mt-6 max-w-3xl">
					An email confirmation is sent to your e-mail address after placing your order. Please keep
					this e-mail as proof of your purchase. If you are unable to locate this e-mail, please
					check your spam folder. If it is not there, please contact us on
					contact@tassietallow.com.au
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					2.0 Delivery Service Providers
				</h2>
				<p class="mt-6 max-w-3xl">
					You acknowledge that the purchase services offered by Tassie Tallow integrate delivery
					(the 'Delivery Services') using Australia Post and other delivery service providers (the
					'Delivery Service Providers'). You acknowledge and agree that Tassie Tallow is not the
					provider of these delivery services and merely facilitates your interaction with the
					Delivery Service Providers in respect to providing the Delivery Services.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					3.0 Shipment Processing Time
				</h2>
				<p class="mt-6 max-w-3xl">
					Processing time refers to the time it takes for Tassie Tallow to prepare your order for
					shipping. After your payment is authorised and verified, Tassie Tallow attempts to process
					all orders within 2 business days.
				</p>
				<p class="mt-4 max-w-3xl">
					Note: Shipment delays can occur due to production up-keep demands. Small business = small
					batches. Equals the freshest produce at your front-door.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					4.0 Shipment Location
				</h2>
				<p class="mt-6 max-w-3xl">
					Tassie Tallow ships domestically across Australia. If you have a question about domestic
					or international deliveries, please contact Tassie Tallow at contact@tassietallow.com.au
				</p>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
					4.1 Shipping Restrictions
				</h3>
				<p class="mt-4 max-w-3xl">
					Tassie Tallow ships to both commercial and domestic addresses. Customers can have their
					order shipped to a P.O. Box or an Australian Post parcel locker.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					5.0 Shipment Rates and Delivery Estimates
				</h2>
				<ul class="mt-6 max-w-3xl list-disc pl-6">
					<li class="mt-2">
						Tassie Tallow endeavours to get your order to you as soon as possible. Delivery times
						are estimates and commence from the date of shipment, rather than the date of order.
					</li>
					<li class="mt-2">
						Delivery times are to be used as a guide only and are subject to the acceptance and
						approval of your order. Estimated arrival dates are not guaranteed.
					</li>
					<li class="mt-2">
						Unless there are exceptional circumstances, Tassie Tallow makes every effort to fulfil
						your order in the estimated time frames and be in contact should those expectations be
						exceeded.
					</li>
					<li class="mt-2">
						Australia Post shipping rates are automatically calculated at checkout depending on your
						order weight and shipping destination.
					</li>
					<li class="mt-2">
						If you have opted for the Express Shipping option and we do not ship via Express to your
						location then we will contact you to let you know.
					</li>
					<li class="mt-2">Our delivery estimates should be used as a general guide only.</li>
					<li class="mt-2">
						Items may be held longer than usual by Australian and overseas customs authorities.
					</li>
					<li class="mt-2">
						All estimates are for metro destinations – items sent to regional and rural locations
						will likely take longer.
					</li>
				</ul>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
					5.1 Express Shipping (AUSTRALIA)
				</h3>
				<p class="mt-4 max-w-3xl">Express Shipping is not available with FREE SHIPPING.</p>
				<p class="mt-4 max-w-3xl">
					Estimated time of arrival (ETA) per Australia Post guidelines is 1-3 business days* to
					METRO areas only. Unknown ETA for RURAL addresses but take into consideration additional
					days before receiving your order.
				</p>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
					5.2 Standard Shipping (AUSTRALIA)
				</h3>
				<p class="mt-4 max-w-3xl">
					Estimated time of arrival (ETA) per Australia Post guidelines is 3-6 business days** to
					METRO areas only. Unknown ETA for RURAL addresses but take into consideration additional
					days before receiving your order.
				</p>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
					5.3 Express Shipping (NEW ZEALAND)
				</h3>
				<p class="mt-4 max-w-3xl">Express Shipping is not available with FREE SHIPPING.</p>
				<p class="mt-4 max-w-3xl">
					Estimated time of arrival (ETA) per Australia Post guidelines is 5-8 business days* to
					METRO areas only. Unknown ETA for RURAL addresses but take into consideration additional
					days before receiving your order.
				</p>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
					5.4 Standard Shipping (NEW ZEALAND)
				</h3>
				<p class="mt-4 max-w-3xl">
					Estimated time of arrival (ETA) per Australia Post guidelines is 7-10 business days** to
					METRO areas only. Unknown ETA for RURAL addresses but take into consideration additional
					days before receiving your order.
				</p>

				<p class="mt-6 max-w-3xl italic">
					*Next business day delivery is only available within the Express Post next business day
					delivery network. The national next business day delivery network operates between capital
					cities (excluding Darwin; and for Perth, delivery into the CBD only) and some major
					centres.
				</p>
				<p class="mt-4 max-w-3xl italic">
					**While we endeavour to meet this timetable, the actual delivery speed will depend on
					where in each state/territory the item is being posted from/to, and the level of
					congestion in Australia Post's delivery network at the time. All delivery times are based
					on the number of business days items take to arrive following the day of posting.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					6.0 Please Note
				</h2>
				<ul class="mt-6 max-w-3xl list-disc pl-6">
					<li class="mt-2">Orders are not shipped or delivered on weekends or holidays.</li>
					<li class="mt-2">
						Date of delivery may vary due to carrier shipping practices, delivery location, method
						of delivery, and the items ordered.
					</li>
					<li class="mt-2">Products may be delivered in separate shipments.</li>
					<li class="mt-2">
						Tassie Tallow will not be responsible for absent receivers or wrong shipping address if
						you provide incorrect information.
					</li>
					<li class="mt-2">Click-and-Collect pick-up dates vary based on product availability.</li>
				</ul>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					7.0 Tracking Options
				</h2>
				<p class="mt-6 max-w-3xl">
					Tassie Tallow aims to provide visibility and transparency throughout the shipment process.
					Once your order is confirmed and shipped, you will receive a link to track your package.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					8.0 Damages or Delays
				</h2>
				<p class="mt-6 max-w-3xl">
					If an item is lost or damaged during the Delivery Services, Tassie Tallow asks that you:
				</p>
				<ul class="mt-4 max-w-3xl list-disc pl-6">
					<li class="mt-2">
						In the event of delivery delays: contact us at contact@tassietallow.com.au directly to
						request an update on the delivery status and we will request that the Delivery Service
						Provider launches an investigation about the delay; or
					</li>
					<li class="mt-2">
						In the event of a damaged item or parcel: contact Tassie Tallow by sending an email to
						contact@tassietallow.com.au outlining in what way the products were damaged in transit.
						Please provide all relevant photographs outlining the damage.
					</li>
				</ul>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					9.0 Missing or Lost Package
				</h2>
				<p class="mt-6 max-w-3xl">
					There are several reasons why a package gets lost or becomes a delivery exception. Often,
					the package is either in the building or with a neighbour. Tassie Tallow politely requests
					that customers look in common courier hiding spots. Please look around and let Tassie
					Tallow know if you find it. If you have not located your order, at the first instance
					please contact us at contact@tassietallow.com.au to report the missing or lost product.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					10.0 Questions
				</h2>
				<p class="mt-6 max-w-3xl">
					Please email contact@tassietallow.com.au if you have any further questions.
				</p>

				<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
					<div
						class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-[#F6A936]"
					>
						<div class="flex items-center justify-center gap-2">
							<Mail class="h-6 w-6 transition group-hover:text-[#F6A936]" />
							<h3 class="text-base/7 font-semibold text-background">Email</h3>
						</div>
						<div class="mt-6">
							<p class="text-center font-semibold text-background underline">
								contact@tassietallow.com.au
							</p>
						</div>
					</div>
					<div
						class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-[#F6A936]"
					>
						<div class="flex items-center justify-center gap-2">
							<Phone class="h-6 w-6 transition group-hover:text-[#F6A936]" />
							<h3 class="text-base/7 font-semibold text-background">Phone</h3>
						</div>
						<div class="mt-6">
							<p class="text-center font-semibold text-background underline">0467 014 040</p>
						</div>
					</div>
					<div
						class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-[#F6A936]"
					>
						<div class="flex items-center justify-center gap-2">
							<Clock class="h-6 w-6 transition group-hover:text-[#F6A936]" />
							<h3 class="text-base/7 font-semibold text-background">Office Hours</h3>
						</div>
						<div class="mt-6">
							<p class="text-center font-semibold text-background underline">
								9:00 AM - 5:00 PM AEST
							</p>
						</div>
					</div>
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="returns">
			<div class="mx-auto flex max-w-5xl flex-col items-center justify-center px-4">
				<h1
					class="font-heading mx-auto mt-12 max-w-2xl scroll-m-20 text-center text-3xl font-bold tracking-tight text-background lg:mx-0 lg:text-5xl"
				>
					RETURNS POLICY
				</h1>

				<p class="mt-12 max-w-3xl">
					Our policy lasts 7 days after the arrival of your purchased order. If 7 days have gone by
					since your purchase has arrived, then unfortunately we can't offer you a refund or
					exchange.
				</p>

				<p class="mt-4 max-w-3xl">
					To be eligible for a return, your item must be unused and in the same condition that you
					received it. It must also be in the original packaging.
				</p>

				<p class="mt-4 max-w-3xl">
					Several types of goods are exempt from being returned. Perishable goods such as food,
					flowers, newspapers or magazines cannot be returned. We also do not accept products that
					are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Additional Non-Returnable Items
				</h2>
				<ul class="mt-6 max-w-3xl list-disc pl-6">
					<li class="mt-2">Gift cards</li>
					<li class="mt-2">Downloadable software products</li>
					<li class="mt-2">Some health and personal care items</li>
				</ul>

				<p class="mt-6 max-w-3xl">
					To complete your return, we require a receipt or proof of purchase. Please do not send
					your purchase back to the manufacturer.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Partial Refunds
				</h2>
				<p class="mt-6 max-w-3xl">
					There are certain situations where only partial refunds are granted (if applicable):
				</p>
				<ul class="mt-4 max-w-3xl list-disc pl-6">
					<li class="mt-2">Book with obvious signs of use</li>
					<li class="mt-2">
						CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been
						opened
					</li>
					<li class="mt-2">
						Any item not in its original condition, is damaged or missing parts for reasons not due
						to our error
					</li>
					<li class="mt-2">Any item that is returned more than 30 days after delivery</li>
				</ul>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Refunds
				</h2>
				<p class="mt-6 max-w-3xl">
					Once your return is received and inspected, we will send you an email to notify you that
					we have received your returned item. We will also notify you of the approval or rejection
					of your refund. If you are approved, then your refund will be processed, and a credit will
					automatically be applied to your credit card or original method of payment, within a
					certain amount of days.
				</p>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
					Late or Missing Refunds
				</h3>
				<p class="mt-4 max-w-3xl">
					If you haven't received a refund yet, first check your bank account again. Then contact
					your credit card company, it may take some time before your refund is officially posted.
					Next contact your bank. There is often some processing time before a refund is posted. If
					you've done all of this and you still have not received your refund yet, please contact us
					at Info@tassietallow.com.au.
				</p>

				<h3 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Sale Items</h3>
				<p class="mt-4 max-w-3xl">
					Only regular priced items may be refunded, unfortunately sale items cannot be refunded.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Exchanges
				</h2>
				<p class="mt-6 max-w-3xl">
					We only replace items if they are defective or damaged. If you need to exchange it for the
					same item, send us an email at Info@tassietallow.com.au and send your item to: Tassie
					Tallow, C/- Boks Bacon, 39 Chapel Street, Glenorchy TAS 7010, Australia
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Gifts
				</h2>
				<p class="mt-6 max-w-3xl">
					If the item was marked as a gift when purchased and shipped directly to you, you'll
					receive a gift credit for the value of your return. Once the returned item is received, a
					gift certificate will be mailed to you.
				</p>
				<p class="mt-4 max-w-3xl">
					If the item wasn't marked as a gift when purchased, or the gift giver had the order
					shipped to themselves to give to you later, we will send a refund to the gift giver and he
					will find out about your return.
				</p>

				<h2
					class="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 lg:text-3xl"
				>
					Shipping
				</h2>
				<p class="mt-6 max-w-3xl">
					To return your product, you should mail your product to: Tassie Tallow, C/- Boks Bacon, 39
					Chapel Street, Glenorchy TAS 7010, Australia
				</p>
				<p class="mt-4 max-w-3xl">
					You will be responsible for paying for your own shipping costs for returning your item.
					Shipping costs are non-refundable. If you receive a refund, the cost of return shipping
					will be deducted from your refund.
				</p>
				<p class="mt-4 max-w-3xl">
					Depending on where you live, the time it may take for your exchanged product to reach you,
					may vary.
				</p>

				<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
					<div
						class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-[#F6A936]"
					>
						<div class="flex items-center justify-center gap-2">
							<Mail class="h-6 w-6 transition group-hover:text-[#F6A936]" />
							<h3 class="text-base/7 font-semibold text-background">Email</h3>
						</div>
						<div class="mt-6">
							<p class="text-center font-semibold text-background underline">
								contact@tassietallow.com.au
							</p>
						</div>
					</div>
					<div
						class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-[#F6A936]"
					>
						<div class="flex items-center justify-center gap-2">
							<Phone class="h-6 w-6 transition group-hover:text-[#F6A936]" />
							<h3 class="text-base/7 font-semibold text-background">Phone</h3>
						</div>
						<div class="mt-6">
							<p class="text-center font-semibold text-background underline">0467 014 040</p>
						</div>
					</div>
					<div
						class="group rounded-3xl border-2 border-transparent bg-[#345650] p-8 text-center transition-all hover:border-[#F6A936]"
					>
						<div class="flex items-center justify-center gap-2">
							<Clock class="h-6 w-6 transition group-hover:text-[#F6A936]" />
							<h3 class="text-base/7 font-semibold text-background">Office Hours</h3>
						</div>
						<div class="mt-6">
							<p class="text-center font-semibold text-background underline">
								9:00 AM - 5:00 PM AEST
							</p>
						</div>
					</div>
				</div>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</section>
