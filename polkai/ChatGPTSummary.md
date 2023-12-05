#Polkai
## Project Overview

CHE (Contextual Help Engine) aims to use a ChatGPT instance to provide information and support for the community about Polkadot and related technologies. Compared to search engines using an LLM based contextual agent is a great step up, therefore it can speed up not only understanding the technology, but taking the first steps by providing code examples and can also be useful for developers in a limited way. 

## Project Details

### Background

OpenAI launched a tool named ChatGPT (using GPT-3.5) in November 2022 as a free research preview. Their preview seemed so effective, that people started to use it at many areas of life. By now a great variety of models are freely available to download. Using them everyone can set up an own instance for custom training and hosting.

### GPT-Based Search vs Simple Search Engine

In recent years, advancements in natural language processing (NLP) have led to the development of sophisticated language models such as GPT (Generative Pre-trained Transformer). Comparing a GPT-based search to a traditional simple search engine reveals several key advantages.

#### 1. **Understanding Context:**
   - *Simple Search Engine:* Traditional search engines often rely on keyword matching, lacking the ability to grasp the contextual nuances of user queries.
   - *GPT-Based Search:* GPT models "excel in understanding context", allowing for a more nuanced interpretation of user queries. This results in more relevant and accurate search results.

#### 2. **Natural Language Interaction:**
   - *Simple Search Engine:* User queries are typically treated as a string of keywords, limiting the capacity for natural language interaction.
   - *GPT-Based Search:* GPT models are designed to comprehend and generate human-like text. Users can interact with the search engine in a conversational manner, leading to a more user-friendly and intuitive experience.

#### 3. **Contextual Inference:**
   - *Simple Search Engine:* Limited ability to infer context from the user's query, often resulting in the need for additional refining keywords.
   - *GPT-Based Search:* GPT models can perform contextual inference, understanding the user's intent even in ambiguous queries. This reduces the dependence on explicit keywords and enhances the search experience.

#### 4. **Handling Complex Queries:**
   - *Simple Search Engine:* Struggles with complex queries, especially those involving multiple concepts or requiring a deep understanding of context.
   - *GPT-Based Search:* GPT models can handle complex queries effectively, leveraging their ability to understand and synthesize information from diverse sources.

#### 5. **Continuous Learning:**
   - *Simple Search Engine:* Typically static in its approach, with periodic updates to algorithms.
   - *GPT-Based Search:* Some GPT models can continuously learn from new data, ensuring that the search engine remains up-to-date with evolving language patterns and user preferences.

## Conclusion
In summary, a GPT-based search offers a more advanced and user-centric approach compared to a simple search engine. The ability to understand context, engage in natural language interaction, and adapt to individual preferences makes GPT-based searches a powerful and intelligent choice for users seeking a more sophisticated search experience.


### Product

The product itself is a custom ChatGPT trained with Vara Network (and related technologies) knowledge and code base.

# Pros and Cons of Using a Customized Instance of GPT

## Pros

1. **Tailored to Specific Needs:**
   - *Pro:* A customized instance of GPT allows users to fine-tune the model for specific tasks or industries, enhancing its performance in domains where general models might fall short.

2. **Increased Relevance:**
   - *Pro:* Customization enables the model to better understand and generate content relevant to the user's context, improving the accuracy and usefulness of generated responses.

3. **Industry-Specific Vocabulary:**
   - *Pro:* Tailoring GPT allows for the inclusion of industry-specific terminology and vocabulary, ensuring that the model comprehends and generates content with domain-specific language.

4. **Improved Performance:**
   - *Pro:* By training GPT on domain-specific datasets, users can potentially achieve improved performance and accuracy for tasks that align with the targeted customization.

5. **Adaptability to Unique Use Cases:**
   - *Pro:* Customization facilitates to adapt GPT to unique use cases, allowing organizations to leverage the model for specialized applications or scenarios.

6. **Database can be kept more up-to-date:**
   - *Pro:* By having direct access to the database and admin functions, the GPT database can be updated as soon as something get outdated or updated, and this opportunity is very important in our case.

## Cons

1. **Data Requirements:**
   - *Con:* Customizing GPT effectively often requires substantial amounts of relevant training data. Obtaining and preparing high-quality, domain-specific datasets can be a resource-intensive process.

2. **Overfitting Risks:**
   - *Con:* Overfitting is a concern when customizing GPT, especially if the training dataset is too small or not representative. This can result in a model that performs well on training data but poorly on new, unseen data.

5. **Dependency on Training Infrastructure:**
   - *Con:* Training a customized GPT model demands significant computational resources. We must have access to powerful hardware or cloud-based solutions, which can incur additional costs.

6. **Centralized knowledge base:**
   - *Con:* Having a knowledge base in one place is not decentralized, but the same stands for gitlab/github

## Conclusion
By accepting the cons coming with the technology it's possible to provide better tailored and more user-friendly opportunity for the community to work with. It can reduce the time needed for finding information and can give better and more accurate results. 

